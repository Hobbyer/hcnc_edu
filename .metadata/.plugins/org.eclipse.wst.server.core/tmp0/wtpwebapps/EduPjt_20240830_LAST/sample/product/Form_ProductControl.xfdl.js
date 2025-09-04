(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_ProductControl");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_products", this);
            obj._setContents("<ColumnInfo><Column id=\"PROD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"STOCK\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"DISCOUNT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISCOUNT_PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_main_category", this);
            obj._setContents("<ColumnInfo><Column id=\"CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sub_category", this);
            obj._setContents("<ColumnInfo><Column id=\"SUB_CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_CATE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search_product", this);
            obj._setContents("<ColumnInfo><Column id=\"PROD_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","160",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_products");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"메인카테고리\"/><Cell col=\"2\" text=\"서브카테고리\"/><Cell col=\"3\" text=\"재고\"/><Cell col=\"4\" text=\"상품명\"/><Cell col=\"5\" text=\"금액\"/><Cell col=\"6\" text=\"할인여부\"/><Cell col=\"7\" text=\"할인금액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:CATE_CODE\"/><Cell col=\"2\" text=\"bind:SUB_CATE_CODE\"/><Cell col=\"3\" text=\"bind:STOCK\"/><Cell col=\"4\" text=\"bind:PROD_NAME\"/><Cell col=\"5\" text=\"bind:PRICE\"/><Cell col=\"6\" text=\"bind:DISCOUNT_YN\"/><Cell col=\"7\" text=\"bind:DISCOUNT_PRICE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_row_add","1136","99","53","37",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("+");
            this.addChild(obj.name, obj);

            obj = new Button("btn_row_delete","1199","99","53","37",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,"77","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("lightgrey");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","16","18","84","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("메인카테고리");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("ed_userName","720","20","200","37",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","326","18","87","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("서브카테고리");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","666","18","64","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("상품명");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cb_level","423","20","200","37",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_sub_category");
            obj.set_codecolumn("SUB_CATE_CODE");
            obj.set_datacolumn("SUB_CATE_NAME");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_exel","981","18","80","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("엑셀");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search","1081","18","80","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("조회");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_save","1181","18","80","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("저장");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cb_level00","103","20","200","37",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_main_category");
            obj.set_codecolumn("CATE_CODE");
            obj.set_datacolumn("CATE_NAME");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","Div00.form.ed_userName","value","ds_search_product","PROD_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_ProductControl.xfdl", function() {
        this.Form_ProductControl_onload = function(obj,e)
        {
        	this.read_products();
        };


        this.read_products = function()
        {
        	var strSvcID = "readProducts";	  // 트랜잭션 아이디
        	var strUrl = "svc::readProducts.do"; // 컨트롤러에 보내는거
        	var strInDatasets = "";
        	var strOutDatasets = "ds_products=ds_products";
        	var strArg = "";
        	var callBack = "fn_callBack";
        	var inAsync = true;

        	this.transaction(strSvcID, strUrl, strInDatasets, strOutDatasets, strArg, callBack, inAsync);
        };

        this.btn_row_add_onclick = function(obj,e)
        {

        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_ProductControl_onload,this);
            this.btn_row_add.addEventHandler("onclick",this.btn_row_add_onclick,this);
            this.btn_row_delete.addEventHandler("onclick",this.btn_row_delete_onclick,this);
            this.Div00.form.cb_level.addEventHandler("onitemchanged",this.Div00_cb_level_onitemchanged,this);
            this.Div00.form.btn_exel.addEventHandler("onclick",this.Div00_btn_exel_onclick,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.Div00.form.btn_save.addEventHandler("onclick",this.Div00_btn_save_onclick,this);
            this.Div00.form.cb_level00.addEventHandler("onitemchanged",this.Div00_cb_level_onitemchanged,this);
        };
        this.loadIncludeScript("Form_ProductControl.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
