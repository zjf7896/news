const request = require('request');
// 爬虫
const cheerio = require('cheerio');
// $获取
const async = require('async');
// 顺序 从哪个开始执行async.eachLimit（$（'li'）10 ()=>{}  ）
const filter = require('bloom-filter-x');
// 布隆过滤器
const iconv = require('iconv-lite');
// 字体
const mysql = require('mysql');
// 数据库

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db'
});
connection.connect();
// 数据库引入

function news_fatch() {
    request({
            url: 'http://news.zol.com.cn/',
            encoding: null,
        }, (err, res, body) => {
            body = iconv.decode(body, 'gb2312');
            let $ = cheerio.load(body);
            let urls = [];
            async.eachLimit($('.content-list li'), 10, (v, next) => {
                let url = $(v).find('.info-head a').attr('href');
                let t = $(v).find('.info-head a');
                let title = t.text();
                let dsc = $(v).find('p').contents().eq(0).text();
                let src = $(v).find('img').attr('.src');
                if (filter.add(url)) {
                    urls.push(url);
                    request({
                        url: url,
                        encoding: null
                    }, (err, res, body) => {
                        body = iconv.decode(body, 'gb2312');
                        let $ = cheerio.load(body);
                        let cid = '1';
                        let pubtime = $('#pubtime_baidu').attr('content');
                        let nav = $('#article-content').html();
                        let insert_sql = 'insert into news (cid, title, dsc, image, url, create_time, content) values (?,?,?,?,?,?,?)';
                        connection.query(insert_sql, [cid, title, dsc, src, url, pubtime, nav], (err, results, fields) => {
                            if (err)throw err;
                            console.log(results.insertId);
                        });
                        next(null);
                    });
                }
            });
            if (urls.length) {
                let d = new Date();
                console.log(d.toUTCString() + '本次更新了');
            } else {
                console.log(d.toUTCString() + '本次未更新');
            }
        }
    );
}
news_fatch();
setInterval(news_fatch, 1000000);