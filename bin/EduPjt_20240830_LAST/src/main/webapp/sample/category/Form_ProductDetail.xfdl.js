(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_ProductDetail");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_product", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_CODE\" type=\"INT\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_STOCK\" type=\"INT\" size=\"256\"/><Column id=\"PRODUCT_PRICE\" type=\"INT\" size=\"256\"/><Column id=\"PRODUCT_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_SALE_RATE\" type=\"INT\" size=\"256\"/><Column id=\"CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_CODE\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_response", this);
            obj._setContents("<ColumnInfo><Column id=\"message\" type=\"STRING\" size=\"256\"/><Column id=\"result_value\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","366","23","554","674",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_background("lightskyblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","62","69","70","43",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("카테고리명");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","62","136","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("상품명");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","62","250","70","68",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("재고");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","62","372","70","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("설명");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","164","136","300","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","164","357","300","202",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00","164","82","300","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_background("lightgray");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","164","257","300","43",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","144","594","100","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("저장");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","368","594","100","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("취소");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","254","593","100","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("삭제");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","164","202","300","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","62","202","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("가격");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Static04_00","text","ds_product","CATE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Edit00","value","ds_product","PRODUCT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.Edit00_00","value","ds_product","PRODUCT_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.Edit01_00","value","ds_product","PRODUCT_STOCK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.TextArea00","value","ds_product","PRODUCT_CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_ProductDetail.xfdl", function() {

        this.Form_ProductDetail_onload = function(obj,e)
        {
        	var productCode = this.parent.productCode;

        	this.ds_search.setColumn(0, "PRODUCT_CODE", productCode);

        	this.fn_search();
        };

        this.fn_callback = function(svcId, errCd, errMsg)
        {
        	switch(svcId) {
        	case "saveProduct":

        		var message = this.ds_response.getColumn(0, "message")
        		var result_value = this.ds_response.getColumn(0, "result_value");

        		if(result_value === 1){
        			this.alert(message);
        			this.close();
        		} else {
        			this.alert(message);
        		}

        		break;

        	default:

        	}
        };


        this.fn_search = function()
        {
        	// 1. 필드 변수 선언
        	var strSvcId    = "getProduct";      // 서비스 ID
        	var strSvcUrl   = "svc::getProduct.do";      // 호출 URL
        	var inData      = "ds_search=ds_search";      // 입력 Dataset (ex: "ds_input=ds_input")
        	var outData     = "ds_product=ds_product";      // 출력 Dataset (ex: "ds_output=ds_output")
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
        };

        this.fn_save = function()
        {
        	// 1. 필드 변수 선언
        	var strSvcId    = "saveProduct";      // 서비스 ID
        	var strSvcUrl   = "svc::saveProduct.do";      // 호출 URL
        	var inData      = "ds_product=ds_product";      // 입력 Dataset (ex: "ds_input=ds_input")
        	var outData     = "ds_response=ds_response";      // 출력 Dataset (ex: "ds_output=ds_output")
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
        };

        this.Div00_Button01_onclick = function(obj,e)
        {
        	this.close();
        };

        this.Div00_Button00_onclick = function(obj,e)
        {
        	this.fn_save();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_ProductDetail_onload,this);
            this.Div00.form.Static00.addEventHandler("onclick",this.Div00_Static00_onclick,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
            this.Div00.form.Button01.addEventHandler("onclick",this.Div00_Button01_onclick,this);
        };
        this.loadIncludeScript("Form_ProductDetail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
