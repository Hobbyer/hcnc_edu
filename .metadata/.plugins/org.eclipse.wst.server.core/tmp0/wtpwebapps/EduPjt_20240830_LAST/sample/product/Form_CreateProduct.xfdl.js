(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_CreateProduct");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(530,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCate", this);
            obj._setContents("<ColumnInfo><Column id=\"CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubCate", this);
            obj._setContents("<ColumnInfo><Column id=\"SUB_CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_CATE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDisCountYN", this);
            obj._setContents("<ColumnInfo><Column id=\"DISCOUNT_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DISCOUNT_YN\">Y</Col></Row><Row><Col id=\"DISCOUNT_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProduct", this);
            obj._setContents("<ColumnInfo><Column id=\"SUB_CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"DISCOUNT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISCOUNT_PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_cateCode","126","26","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("카테고리코드");
            this.addChild(obj.name, obj);

            obj = new Static("st_subCateCode","126","72","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("서브카테고리코드");
            this.addChild(obj.name, obj);

            obj = new Static("st_productName","126","118","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("상품명");
            this.addChild(obj.name, obj);

            obj = new Static("st_price","126","160","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("금액");
            this.addChild(obj.name, obj);

            obj = new Static("st_discountYN","126","207","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("할인여부");
            this.addChild(obj.name, obj);

            obj = new Static("st_discountRate","126","253","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("할인금액");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_cateCode","254","26","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("dsCate");
            obj.set_codecolumn("CATE_CODE");
            obj.set_datacolumn("CATE_CODE");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_subCateCode","254","72","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("dsSubCate");
            obj.set_codecolumn("SUB_CATE_CODE");
            obj.set_datacolumn("SUB_CATE_CODE");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","254","118","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","254","160","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02","254","207","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("dsDisCountYN");
            obj.set_codecolumn("DISCOUNT_YN");
            obj.set_datacolumn("DISCOUNT_YN");
            obj.set_text("Combo02");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","254","253","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Button("btn_create","213","311","104","39",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("등록");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",530,360,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","dsProduct","PROD_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Edit01","value","dsProduct","PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Combo02","value","dsProduct","DISCOUNT_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Edit02","value","dsProduct","DISCOUNT_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cb_subCateCode","value","dsProduct","SUB_CATE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_CreateProduct.xfdl", function() {

        this.Form_CreateProduct_onload = function(obj,e)
        {

        	var dsCate = this.parent.dsCate;
        	var dsSubCate = this.parent.dsSubCate;

        	trace(dsCate);

        	this.dsCate.copyData(dsCate);
        	this.dsSubCate.copyData(dsSubCate);
        };

        this.fn_callback = function(svcId, errCd, errMsg)
        {
        	if(svcId == "insetProduct"){
        		if(errCd == -1){
        			this.alert(errMsg);
        		} else {
        			this.alert("상품 등록 완료!");

        			this.close();
        		}
        	}
        };

        this.cb_cateCode_onitemchanged = function(obj,e)
        {
        	var cateCode = e.postvalue;

        	this.dsSubCate.filter("CATE_CODE == '" + cateCode + "'");

        };

        this.cb_subCateCode_onitemchanged = function(obj,e)
        {

        };

        this.btn_create_onclick = function(obj,e)
        {
        	var strSvcID = "insetProduct";	  // 트랜잭션 아이디
        	var strUrl = "svc::insetProduct.do"; // 컨트롤러에 보내는거
        	var strInDatasets = "dsProduct=dsProduct";
        	var strOutDatasets = "";
        	var strArg = "";
        	var callBack = "fn_callBack";
        	var inAsync = true;

        	this.transaction(strSvcID, strUrl, strInDatasets, strOutDatasets, strArg, callBack, inAsync);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_CreateProduct_onload,this);
            this.cb_cateCode.addEventHandler("onitemchanged",this.cb_cateCode_onitemchanged,this);
            this.cb_subCateCode.addEventHandler("onitemchanged",this.cb_subCateCode_onitemchanged,this);
            this.btn_create.addEventHandler("onclick",this.btn_create_onclick,this);
        };
        this.loadIncludeScript("Form_CreateProduct.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
