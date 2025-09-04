(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Main");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_user", this);
            obj._setContents("<ColumnInfo><Column id=\"user_id\" type=\"STRING\" size=\"256\"/><Column id=\"user_pw\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_login", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userPw\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","100","40",null,null,"100","120",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("2px solid black");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_id","549","285","250","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_pw","549","336","250","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_password("true");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Button("btn_login","575","405","130","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("로그인");
            obj.set_textAlign("center");
            obj.set_font("14pt/normal \"Arial\"");
            obj.set_borderRadius("10px");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Static("st_id","460","284","75","43",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("아이디 :");
            obj.set_font("bold 18px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("st_pw","441","333","91","43",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("패스워드 :");
            obj.set_font("bold 18px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","554","227","221","46",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("로그인을 해주세요");
            obj.set_font("bold 18px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","485","466","310","18",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("(주) 에이치씨엔씨에 오신걸 환영합니다.");
            obj.set_font("bold 16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","ed_id","value","ds_user","user_id");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ed_pw","value","ds_user","user_pw");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Main.xfdl", function() {
        this.Form_Main_onload = function(obj,e)
        {
        	trace(">>>");
        };

        this.Button00_onclick = function(obj,e)
        {
        	var userId = this.ds_user.getColumn(0, "user_id");
        	var userPw = this.ds_user.getColumn(0, "user_pw");

        	var strSvcID = "selectUser";	  // 트랜잭션 아이디
        	var strUrl = "svc::selectUser.do"; // 컨트롤러에 보내는거
        	var strInDatasets = "ds_user=ds_user";
        	var strOutDatasets = "ds_login=ds_login";
        	var strArg = "";
        	var callBack = "fn_callBack";
        	var inAsync = true;

        	this.transaction(strSvcID, strUrl, strInDatasets, strOutDatasets, strArg, callBack, inAsync);

        };

        this.fn_callBack = function(svcID, errCD, errMSG){
        		if(svcID == "selectUser") {

        			var glbAd = nexacro.getApplication();


        			var userId = this.ds_login.getColumn(0, "userId");

        			if(userId != null && userId != ''){
        				alert("로그인 성공!");

        				glbAd.gds_userInfo.setColumn(0, "user_id", this.ds_login.getColumn(0, "userId"));

        				this.ds_login.clear();

        				var objApp = nexacro.getApplication();

        				objApp.mainframe.VFrameSet00.TopFrame.set_visible(true);
        				objApp.mainframe.VFrameSet00.HFrameSet00.LeftFrame.set_visible(true);
        				objApp.mainframe.VFrameSet00.HFrameSet00.WorkFrame.set_formurl("Base::Form_Base.xfdl");

        			} else {
        				alert("아이디 또는 비밀번호가 틀렸습니다.");

        				this.ds_login.clear();
        			}

        		}
        	};

        this.Static01_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Main_onload,this);
            this.ed_id.addEventHandler("onchanged",this.ed_id_onchanged,this);
            this.btn_login.addEventHandler("onclick",this.Button00_onclick,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
        };
        this.loadIncludeScript("Form_Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
