(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_UserControl");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_users", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"POINT\" type=\"STRING\" size=\"256\"/><Column id=\"IS_USE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search_user", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_level", this);
            obj._setContents("<ColumnInfo><Column id=\"LEVEL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LEVEL_ID\">I</Col><Col id=\"LEVEL\">일반</Col></Row><Row><Col id=\"LEVEL_ID\">B</Col><Col id=\"LEVEL\">브론즈</Col></Row><Row><Col id=\"LEVEL_ID\">S</Col><Col id=\"LEVEL\">실버</Col></Row><Row><Col id=\"LEVEL_ID\">G</Col><Col id=\"LEVEL\">골드</Col></Row><Row><Col id=\"LEVEL_ID\">P</Col><Col id=\"LEVEL\">플래티넘</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","160",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_users");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"회원ID\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"생년월일\"/><Cell col=\"3\" text=\"주소\"/><Cell col=\"4\" text=\"등급\"/><Cell col=\"5\" text=\"포인트\"/><Cell col=\"6\" text=\"회원유무\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:NAME\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:BIRTH_DAY\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:ADDRESS\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:LEVEL\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:POINT\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:IS_USE\" edittype=\"normal\"/></Band></Format></Formats>");
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

            obj = new Static("Static00","16","18","64","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("회원ID");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("ed_userId","65","20","200","37",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("ed_userName","350","20","200","37",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","296","18","64","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("이름");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","586","18","64","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("등급");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cb_level","633","20","200","37",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_level");
            obj.set_codecolumn("LEVEL_ID");
            obj.set_datacolumn("LEVEL");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_exel","871","18","80","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("엑셀");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search","971","18","80","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("조회");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_save","1071","18","80","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("저장");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_delete","1161","18","80","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("삭제");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.ed_userId","value","ds_search_user","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.ed_userName","value","ds_search_user","NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_UserControl.xfdl", function() {

        this.Form_UserControl_onload = function(obj,e)
        {
        	this.read_users();
        };

        this.fn_callback = function(svcId, errCode, errMsg)
        {
        	switch(svcId) {
        	case "readUsers" :

        		if(errCode != -1){
        			var insertRow = this.ds_level.insertRow(0);

        			this.ds_level.setColumn(insertRow, "LEVEL_ID", "ALL");
        			this.ds_level.setColumn(insertRow, "LEVEL", "-전체-");

        			this.Div00.form.cb_level.set_value("ALL");
        		}

        		break;

        	default:
        	}
        };

        this.read_users = function()
        {
        	// 1. 필드 변수 선언
        	var strSvcId    = "readUsers";      // 서비스 ID
        	var strSvcUrl   = "svc::readUsers.do";      // 호출 URL
        	var inData      = "";      // 입력 Dataset (ex: "ds_input=ds_input")
        	var outData     = "ds_users=ds_users";      // 출력 Dataset (ex: "ds_output=ds_output")
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

        this.get_user = function()
        {
        	var strSvcID = "getUser";	  // 트랜잭션 아이디
        	var strUrl = "svc::getUser.do"; // 컨트롤러에 보내는거
        	var strInDatasets = "ds_search_user=ds_search_user ds_level=ds_level";
        	var strOutDatasets = "ds_users=ds_users";
        	var strArg = "";
        	var callBack = "fn_callBack";
        	var inAsync = true;

        	this.transaction(strSvcID, strUrl, strInDatasets, strOutDatasets, strArg, callBack, inAsync);
        };

        this.btn_row_add_onclick = function(obj,e)
        {
        	this.ds_users.addRow();
        };

        this.Div00_btn_search_onclick = function(obj,e)
        {
        	this.get_user();
        };

        this.Div00_cb_level_onitemchanged = function(obj,e)
        {
        	this.ds_search_user.setColumn(0, "LEVEL", this.Div00.form.cb_level.text);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_UserControl_onload,this);
            this.btn_row_add.addEventHandler("onclick",this.btn_row_add_onclick,this);
            this.Div00.form.cb_level.addEventHandler("onitemchanged",this.Div00_cb_level_onitemchanged,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
        };
        this.loadIncludeScript("Form_UserControl.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
