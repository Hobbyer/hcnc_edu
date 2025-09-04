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
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_users");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"회원ID\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"생년월일\"/><Cell col=\"3\" text=\"주소\"/><Cell col=\"4\" text=\"등급\"/><Cell col=\"5\" text=\"포인트\"/><Cell col=\"6\" text=\"회원유무\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:BIRTH_DAY\"/><Cell col=\"3\" text=\"bind:ADDRESS\"/><Cell col=\"4\" text=\"bind:LEVEL\"/><Cell col=\"5\" text=\"bind:POINT\"/><Cell col=\"6\" text=\"bind:IS_USE\"/></Band></Format></Formats>");
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
        this.registerScript("Form_UserControl.xfdl", function() {

        this.Form_UserControl_onload = function(obj,e)
        {
        	this.read_users();
        };

        this.fn_callback = function(svcId, errCode, errMsg)
        {
        	switch(svcId) {
        	case "readUsers" :

        		if(errCode == -1){
        			this.alert(errMsg);
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_UserControl_onload,this);
        };
        this.loadIncludeScript("Form_UserControl.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
