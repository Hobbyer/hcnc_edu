(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Board");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"FIRST_REG_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SECOND_REG_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_CODE\" type=\"INT\" size=\"256\"/><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("board_st_static","74","28","338","52",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("게시판입니다");
            obj.set_font("bold 18px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","70","194","90.63%","326",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"작성자\"/><Cell col=\"3\" text=\"작성일자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:BOARD_TITLE\"/><Cell col=\"2\" text=\"bind:BOARD_WRITER\"/><Cell col=\"3\" text=\"bind:REG_DATE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","70","95","1162","83",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("board_st_title","19","21","58","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("제목");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("board_search_ed_title","49","24","182","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("board_st_writer","245","20","58","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("작성자");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("board_search_ed_writer","285","23","209","37",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("board_st_regDate","541","19","56","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("작성일자");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("board_search_ed_firstDate","607","18","201","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.getSetter("onclick").set("Common_onclick");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("board_st_title00_00_00","800","19","56","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("board_search_ed_secondDate","846","17","196","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.getSetter("onclick").set("Common_onclick");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("board_btn_search","1058","21","91","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("조회");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.board_search_ed_title","value","ds_search","BOARD_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.board_search_ed_writer","value","ds_search","BOARD_WRITER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.board_search_ed_firstDate","value","ds_search","FIRST_REG_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.board_search_ed_secondDate","value","ds_search","SECOND_REG_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Board.xfdl", function() {

        this.Form_Board_onload = function(obj,e)
        {
        	this.fn_search();

        	this.ds_search.setColumn(0, "FIRST_REG_DATE", 20250101);
        	this.ds_search.setColumn(0, "SECOND_REG_DATE", 20251231);
        };

        // 조회 함수
        this.fn_search = function(){
        	// 1. 필드 변수 선언
        	var strSvcId    = "readBoardList";      // 서비스 ID
        	var strSvcUrl   = "svc::readBoardList.do";      // 호출 URL
        	var inData      = "";      // 입력 Dataset (ex: "ds_input=ds_input")
        	var outData     = "ds_list=ds_list";      // 출력 Dataset (ex: "ds_output=ds_output")
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


        this.fn_callback = function(svcId, errCD, errMSG){

        	if(svcId === "readBoardList"){

        	}
        	else if(svcId === "searchBoard"){


        		this.ds_search.clear();
        	}
        	else if(svcId === "searchBoardList"){


        	}
        };

        this.Grid00_oncellclick = function(obj,e)
        {
        	var boardIdx = this.ds_list.getColumn(e.row, "BOARD_CODE");

        	var boardIdx2 = this.ds_list.getColumn(this.ds_list.rowposition, "BOARD_CODE");

        	popup = new nexacro.ChildFrame;

        	var surl = "board::Form_BoardDetail.xfdl";

        	var param = {
        		boardIdx : boardIdx
        	};

        	popup.init("updatePop", 0, 0, 800, 700, null, null, surl);
        	popup.set_dragmovetype("all");
        	popup.set_showtitlebar("상세보기");
        	popup.showModal(this.getOwnerFrame(), param, this, "fn_popCallback", true);

        };



        this.Div00_board_btn_search_onclick = function(obj,e)
        {
        	// 1. 필드 변수 선언
        	var strSvcId    = "searchBoardList";      // 서비스 ID
        	var strSvcUrl   = "svc::searchBoardList.do";      // 호출 URL
        	var inData      = "ds_search=ds_search";      // 입력 Dataset (ex: "ds_input=ds_input")
        	var outData     = "ds_list=ds_list";      // 출력 Dataset (ex: "ds_output=ds_output")
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
            this.addEventHandler("onload",this.Form_Board_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Div00.form.board_st_regDate.addEventHandler("onclick",this.Common_onclick,this);
            this.Div00.form.board_st_title00_00_00.addEventHandler("onclick",this.Common_onclick,this);
            this.Div00.form.board_btn_search.addEventHandler("onclick",this.Div00_board_btn_search_onclick,this);
        };
        this.loadIncludeScript("Form_Board.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
