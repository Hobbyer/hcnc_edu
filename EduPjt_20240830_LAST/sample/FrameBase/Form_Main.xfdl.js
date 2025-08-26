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
            obj = new Static("st_id","100","61","110","69",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("아이디");
            obj.set_textAlign("center");
            obj.set_background("red");
            obj.set_border("1px solid black");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("st_pw","100","161","110","69",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("비밀번호");
            obj.set_background("red");
            obj.set_border("1px solid black");
            obj.set_textAlign("center");
            obj.set_color("#ffffff");
            obj.set_font("bold 16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_id","230","75","222","41",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_pw","230","174","224","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_login","476","112","157","56",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("로그인");
            obj.set_textAlign("center");
            obj.set_font("bold 14pt/normal \"Arial\"");
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

        				this.getOwnerFrame().set_formurl("board::Form_Board.xfdl");
        			} else {
        				alert("아이디 또는 비밀번호가 틀렸습니다.");

        				this.ds_login.clear();
        			}

        		}
        	};

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Main_onload,this);
            this.st_id.addEventHandler("onclick",this.Static00_onclick,this);
            this.st_pw.addEventHandler("onclick",this.Static00_00_onclick,this);
            this.ed_id.addEventHandler("onchanged",this.ed_id_onchanged,this);
            this.btn_login.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Form_Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
