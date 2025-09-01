(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Join_Form");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("join_user", this);
            obj._setContents("<ColumnInfo><Column id=\"user_id\" type=\"STRING\" size=\"256\"/><Column id=\"user_pw\" type=\"STRING\" size=\"256\"/><Column id=\"user_name\" type=\"STRING\" size=\"256\"/><Column id=\"user_email\" type=\"STRING\" size=\"256\"/><Column id=\"user_emailChk\" type=\"STRING\" size=\"256\"/><Column id=\"user_addr\" type=\"STRING\" size=\"256\"/><Column id=\"user_recommend\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("join_result", this);
            obj._setContents("<ColumnInfo><Column id=\"message\" type=\"STRING\" size=\"256\"/><Column id=\"result_value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("join_st_id","260","86","115","55",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("아이디");
            obj.set_textAlign("center");
            obj.set_background("red");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("join_ed_id","407","94","227","38",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Edit("join_ed_pw","406","160","227","38",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("join_st_pw","259","152","115","55",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("비밀번호");
            obj.set_textAlign("center");
            obj.set_background("red");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("join_ed_name","405","232","227","38",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("join_st_name","259","223","115","55",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("이름");
            obj.set_textAlign("center");
            obj.set_background("red");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("join_ed_email","405","297","227","38",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("join_st_email","258","289","115","55",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("이메일");
            obj.set_textAlign("center");
            obj.set_background("red");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("join_ed_emailChk","405","370","227","38",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("join_st_emailChk","258","362","115","55",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("인증번호");
            obj.set_textAlign("center");
            obj.set_background("red");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("join_ed_addr","404","437","227","38",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("join_st_addr","257","429","115","55",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("주소");
            obj.set_textAlign("center");
            obj.set_background("red");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("join_ed_recommend","404","511","227","38",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("join_st_recommend","257","503","115","55",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("추천인");
            obj.set_textAlign("center");
            obj.set_background("red");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("join_btn_idChk","654","94","112","38",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("중복체크");
            this.addChild(obj.name, obj);

            obj = new Button("join_btn_eamil","653","296","112","38",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("인증");
            this.addChild(obj.name, obj);

            obj = new Button("join_btn_emailChk","653","369","112","38",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("join_btn_addr","652","436","112","38",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("주소 검색");
            this.addChild(obj.name, obj);

            obj = new Button("join_btn_cancel","531","610","112","38",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("join_btn_submit","370","610","112","38",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("회원가입");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","join_ed_id","value","join_user","user_id");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","join_ed_pw","value","join_user","user_pw");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","join_ed_name","value","join_user","user_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","join_ed_email","value","join_user","user_email");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","join_ed_emailChk","value","join_user","user_emailChk");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","join_ed_addr","value","join_user","user_addr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","join_ed_recommend","value","join_user","user_recommend");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Join_Form.xfdl", function() {


        this.join_btn_idChk_onclick = function(obj,e)
        {
        	var strSvcID = "joinUser";	  // 트랜잭션 아이디
        	var strUrl = "svc::joinUser.do"; // 컨트롤러에 보내는거
        	var strInDatasets = "join_user=join_user";
        	var strOutDatasets = "join_result=join_result";
        	var strArg = "";
        	var callBack = "fn_callBack";
        	var inAsync = true;

        	this.transaction(strSvcID, strUrl, strInDatasets, strOutDatasets, strArg, callBack, inAsync);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.join_btn_idChk.addEventHandler("onclick",this.join_btn_idChk_onclick,this);
        };
        this.loadIncludeScript("Join_Form.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
