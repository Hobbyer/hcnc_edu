(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Product");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_category", this);
            obj._setContents("<ColumnInfo><Column id=\"CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_product", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_CODE\" type=\"INT\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_STOCK\" type=\"INT\" size=\"256\"/><Column id=\"PRODUCT_PRICE\" type=\"INT\" size=\"256\"/><Column id=\"PRODUCT_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_SALE_RATE\" type=\"INT\" size=\"256\"/><Column id=\"CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboBox", this);
            obj._setContents("<ColumnInfo><Column id=\"CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CATE_NAME\">- 전체 -</Col><Col id=\"CATE_CODE\"> - 전체 -</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","50","24","1020","546",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("lightskyblue");
            this.addChild(obj.name, obj);

            obj = new Static("st_pd_cateCode","28","48","78","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("카테고리코드");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cb_pd_cateCode","107","46","148","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_comboBox");
            obj.set_datacolumn("CATE_CODE");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","731","88","74","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","813","88","74","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid01","230","148","740","368",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_product");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"77\"/><Column size=\"72\"/><Column size=\"55\"/><Column size=\"106\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"카테고리명\"/><Cell col=\"1\" text=\"상품명\"/><Cell col=\"2\" text=\"재고\"/><Cell col=\"3\" text=\"설명\"/></Band><Band id=\"body\"><Cell text=\"bind:CATE_NAME\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:PRODUCT_NAME\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:PRODUCT_STOCK\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:PRODUCT_CONTENT\" edittype=\"normal\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","23","146","177","368",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_category");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"카테고리코드\"/></Band><Band id=\"body\"><Cell text=\"bind:CATE_CODE\" textAlign=\"center\" edittype=\"normal\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","155","116","20","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("+");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02","181","116","20","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("-");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","943","112","74","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Product.xfdl", function() {

        this.Form_Product_onload = function(obj,e)
        {
        	this.search_categoryAndProduct();
        };

        this.fn_callback = function()
        {

        };

        this.search_categoryAndProduct = function()
        {
        	// 1. 필드 변수 선언
        	var strSvcId    = "readCategoryAndProduct";      // 서비스 ID
        	var strSvcUrl   = "svc::readCategoryAndProduct.do";      // 호출 URL
        	var inData      = "";      // 입력 Dataset (ex: "ds_input=ds_input")
        	var outData     = "ds_category=ds_category ds_comboBox=ds_category ds_product=ds_product";      // 출력 Dataset (ex: "ds_output=ds_output")
        	var strArg      = "";      // 전달 변수 (ex: "param1=value param2=value")
        	var callBackFnc = "fn_callback";      // 콜백 함수명
        	var bAsync		= true;   // (옵션) bAsync

        	// 2. transaction 호출
        	this.transaction(
        		strSvcId,
        		strSvcUrl,
        		inData,
        		outData,
        		strArg,
        		callBackFnc,
        		bAsync
        	);
        }

        this.Div00_Button01_onclick = function(obj,e)
        {
        	var addRow = this.ds_category.addRow();
        };

        this.Div00_Button01_00_onclick = function(obj,e)
        {
        	//TODO 카테고리 행 삭제.
        };

        this.Div00_Grid00_oncellclick = function(obj,e)
        {
        	var row = this.Div00.form.Grid00.currentrow;

        	var targetCode = this.ds_category.getColumn(row, "CATE_CODE");

        	this.ds_product.filter("CATE_CODE == '" + targetCode + "'");
        };

        this.Div00_Button02_onclick = function(obj,e)
        {
        	var row = this.ds_category.rowposition;
        	if(row > -1){
        		this.ds_category.deleteRow(row);
        	}
        };

        this.Div00_cb_pd_cateCode_onitemchanged = function(obj,e)
        {

        	var targetCode = e.postvalue;

        	switch(targetCode) {
        	case "- 전체 - " :
        		this.ds_category.filter("");
        		break;

        	default:
        		this.ds_category.filter("CATE_CODE == '" + targetCode + "'");
        	}
        };



        this.Div00_Grid01_oncelldblclick = function(obj,e)
        {
        	var productCode = this.ds_product.getColumn(e.row, "PRODUCT_CODE");

        	trace(productCode);

        	popup = new nexacro.ChildFrame;

        	if(productCode != null && productCode != '' && productCode != undefined){

        		var surl = "category::Form_ProductDetail.xfdl";

        		var param = {
        			productCode : productCode
        		};
        	} else {
        		var surl = "category::Form_createProduct.xfdl";

        		var param = {};
        	}

        	popup.init("updatePop", 0, 0, 800, 700, null, null, surl);
        	popup.set_dragmovetype("all");
        	popup.set_showtitlebar("상세보기");
        	popup.showModal(this.getOwnerFrame(), param, this, "fn_popCallback", true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Product_onload,this);
            this.addEventHandler("onsetfocus",this.Form_Product_onload,this);
            this.Div00.form.cb_pd_cateCode.addEventHandler("onitemchanged",this.Div00_cb_pd_cateCode_onitemchanged,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
            this.Div00.form.Grid01.addEventHandler("oncelldblclick",this.Div00_Grid01_oncelldblclick,this);
            this.Div00.form.Grid00.addEventHandler("oncellclick",this.Div00_Grid00_oncellclick,this);
            this.Div00.form.Button01.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.Div00.form.Button02.addEventHandler("onclick",this.Div00_Button02_onclick,this);
        };
        this.loadIncludeScript("Form_Product.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
