<?php
include '../core/db.php';

class page extends db
{
//  首页
    public function index()
    {


//分类
        $category = $this->pdo
            ->query('select * from category where is_default = "1" ')
            ->fetchAll();

// 新闻
        $news = $this->pdo
            ->query(
                'select * from news limit 10'
            )
            ->fetchAll();
        include '../views/index/index.html';

    }

    public function nav(){
        if(isset($_GET['isdefault'])&&isset($_GET['id'])){
            $id = $_GET['id'];
            $isdefault=$_GET['isdefault'];
            if($isdefault==0){
                $category=$this->pdo
                    ->query('update category set is_default = 0 where id ='.$id)
                    ->fetch();
            }elseif($isdefault==1){
                $category=$this->pdo
                    ->query('update category set is_default = 1 where id ='.$id)
                    ->fetch();
            }
        }
        $category=$this->pdo
            ->query('select * from category where is_default = "1" ')
            ->fetchAll();
        $categorys=$this->pdo
            ->query('select * from category where is_default = "0" ')
            ->fetchAll();
        include '../views/index/nav.html';
    }

//    搜索
    public function search()
{
//    $input = $_GET['title'];
//    $input = $this->pdo
//        ->query('select * from news limit 10')
//        ->fetchAll();
//
//
//    $news = $this->pdo
//        ->query(
//            'select * from news limit 10'
//        )
//        ->fetchAll();

    include '../views/index/search.html';
}
};
//    //  分类页面
//    public function category()
//    {
//        // 查两次
//        // 查默认的
//        // 查其他的
//        $category = $this->pdo
//            ->query('select * from news_category')
//            ->fetchAll();
//        include '../views/index/category.html';
//    }
//
//    public function search()
//    {
//        if(isset($_GET['s'])){
//            $keyword = $_GET['s'];
//        }else{
//            $keyword = ' ';
//        }
//        if(isset($_GET['page'])){
//            $page = $_GET['page'];
//        }else{
//            $page = 1;
//        }
//        $results = $this->pdo
//            ->query('select * from news where title like "%'.$keyword.'%" limit '.$this::PER_PAGE.' offset '.($page-1)*$this::PER_PAGE)
//            ->fetchAll();
//        include '../views/index/search.html';
//    }
//
//    // ajax
//    public function searchList(){
//
//        if(isset($_GET['s'])){
//            $keyword = $_GET['s'];
//        }else{
//            $keyword = '';
//        }
//        if(isset($_GET['page'])){
//            $page = $_GET['page'];
//        }else{
//            $page = 1;
//        }
//        $results = $this->pdo
//            ->query('select * from news where title like "%'.$keyword.'%" limit '.$this::PER_PAGE.' offset '.($page-1)*$this::PER_PAGE)
//            ->fetchAll();
//        echo json_encode($results);
//    }




// 前台3个页面
//      ajax方式
// 中台 新闻管理   删除  分页
//      分类管理   删除  设置默认值  编辑
