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
            obj._setContents("<ColumnInfo><Column id=\"CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sub_category", this);
            obj._setContents("<ColumnInfo><Column id=\"SUB_CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_CATE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search_product", this);
            obj._setContents("<ColumnInfo><Column id=\"PROD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_CATE_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","160",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_products");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"메인카테고리\"/><Cell col=\"2\" text=\"서브카테고리\"/><Cell col=\"3\" text=\"재고\"/><Cell col=\"4\" text=\"상품명\"/><Cell col=\"5\" text=\"금액\"/><Cell col=\"6\" text=\"할인여부\"/><Cell col=\"7\" text=\"할인금액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:CATE_CODE\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:SUB_CATE_CODE\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:STOCK\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:PROD_NAME\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:PRICE\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:DISCOUNT_YN\" edittype=\"normal\"/><Cell col=\"7\" text=\"bind:DISCOUNT_PRICE\" edittype=\"normal\"/></Band></Format></Formats>");
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

            obj = new Edit("ed_productName","720","20","200","37",null,null,null,null,null,null,this.Div00.form);
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

            obj = new Combo("cb_subCategory","430","20","200","37",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_sub_category");
            obj.set_codecolumn("SUB_CATE_CODE");
            obj.set_datacolumn("SUB_CATE_CODE");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_exel","981","18","80","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("엑셀");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search","1081","18","80","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("조회");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_create","1181","18","80","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("등록");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cb_cate","103","20","200","37",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_main_category");
            obj.set_codecolumn("CATE_CODE");
            obj.set_datacolumn("CATE_CODE");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","Div00.form.ed_productName","value","ds_search_product","PROD_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.cb_cate","text","ds_main_category","CATE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.cb_subCategory","text","ds_sub_category","SUB_CATE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.cb_subCategory","value","ds_sub_category","SUB_CATE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.cb_cate","value","ds_main_category","CATE_CODE");
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

        this.fn_callback = function(svcId, processCode, msg)
        {
        	if(svcId == "readProducts"){

        		this.ds_main_category.insertRow(0);
        		this.ds_sub_category.insertRow(0);

        		this.ds_main_category.setColumn(insertRow, "CATE_CODE", "ALL");
        		this.ds_main_category.setColumn(insertRow, "CATE_NAME", "-전체-");

        		this.ds_sub_category.setColumn(insertRow, "SUB_CATE_CODE", "ALL");
        		this.ds_sub_category.setColumn(insertRow, "SUB_CATE_NAME", "-전체-");

        		this.Div00.form.cb_cate.set_index(0);
        		this.Div00.form.cb_subCategory.set_index(0);

        		this.cb_subDept.set_readonly(true);
        	}

        };


        this.read_products = function()
        {
        	var strSvcID = "readProducts";	  // 트랜잭션 아이디
        	var strUrl = "svc::readProducts.do"; // 컨트롤러에 보내는거
        	var strInDatasets = "";
        	var strOutDatasets = "ds_products=ds_products ds_main_category=ds_main_category ds_sub_category=ds_sub_category";
        	var strArg = "";
        	var callBack = "fn_callBack";
        	var inAsync = true;

        	this.transaction(strSvcID, strUrl, strInDatasets, strOutDatasets, strArg, callBack, inAsync);
        };

        this.btn_row_add_onclick = function(obj,e)
        {
        	this.ds_products.addRow();
        };



        this.btn_row_delete_onclick = function(obj,e)
        {
        	var row = this.Grid00.getSelectedRows();

        	this.ds_products.deleteRow(row);
        };


        this.Div00_cb_cate_onitemchanged = function(obj,e)
        {
        	var cateCode = e.postvalue;

        	if(cateCode === "ALL"){
        		this.ds_sub_category.filter("");
        		this.Div00.form.cb_subCategory.set_readonly(true);
        		this.Div00.form.cb_subCategory.set_value("ALL");
        	} else {
        		this.ds_search_product.setColumn(0, "CATE_CODE", cateCode);

        		this.ds_sub_category.filter("CATE_CODE == '" + cateCode + "'");
        		this.Div00.form.cb_subCategory.set_readonly(false);

        		this.ds_sub_category.insertRow(0);
        		this.ds_sub_category.setColumn(0, "SUB_CATE_CODE","ALL");

        		this.Div00.form.cb_subCategory.set_index(0);
        	}
        };

        this.Div00_cb_subCategory_onitemchanged = function(obj,e)
        {
        	var subCateCode = e.postvalue;

        	this.ds_search_product.setColumn(0, "SUB_CATE_CODE", subCateCode);
        };

        this.Div00_btn_search_onclick = function(obj,e)
        {
        		var strSvcID = "searchProduct";	  // 트랜잭션 아이디
        		var strUrl = "svc::searchProduct.do"; // 컨트롤러에 보내는거
        		var strInDatasets = "ds_search_product=ds_search_product";
        		var strOutDatasets = "ds_products=ds_products";
        		var strArg = "";
        		var callBack = "fn_callBack";
        		var inAsync = true;

        		this.transaction(strSvcID, strUrl, strInDatasets, strOutDatasets, strArg, callBack, inAsync);
        };

        this.Div00_btn_save_onclick = function(obj,e)
        {
        	popup = new nexacro.ChildFrame;

        	var dsCate = this.ds_main_category;
        	var dsSubCate = this.ds_sub_category;

        	var surl = "product::Form_CreateProduct.xfdl";

        	var param = {
        		dsCate : dsCate,
        		dsSubCate : dsSubCate
        	};

        	popup.init("updatePop", 0, 0, 800, 700, null, null, surl);
        	popup.set_dragmovetype("all");
        	popup.set_showtitlebar("상품등록");
        	popup.set_openalign("center middle");
        	popup.showModal(this.getOwnerFrame(), param, this, "fn_popCallback", true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_ProductControl_onload,this);
            this.addEventHandler("onsetfocus",this.Form_ProductControl_onload,this);
            this.btn_row_add.addEventHandler("onclick",this.btn_row_add_onclick,this);
            this.btn_row_delete.addEventHandler("onclick",this.btn_row_delete_onclick,this);
            this.Div00.form.cb_subCategory.addEventHandler("onitemchanged",this.Div00_cb_subCategory_onitemchanged,this);
            this.Div00.form.btn_exel.addEventHandler("onclick",this.Div00_btn_exel_onclick,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.Div00.form.btn_create.addEventHandler("onclick",this.Div00_btn_save_onclick,this);
            this.Div00.form.cb_cate.addEventHandler("onitemchanged",this.Div00_cb_cate_onitemchanged,this);
        };
        this.loadIncludeScript("Form_ProductControl.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
