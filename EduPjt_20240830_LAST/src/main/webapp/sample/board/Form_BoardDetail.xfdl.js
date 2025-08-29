(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_BoardDetail");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_CODE\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_board", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_CODE\" type=\"INT\" size=\"256\"/><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_response", this);
            obj._setContents("<ColumnInfo><Column id=\"message\" type=\"STRING\" size=\"256\"/><Column id=\"result_value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("b_detail_st_title","74","52","74","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("제목");
            this.addChild(obj.name, obj);

            obj = new Edit("b_detail_ed_title","144","54","316","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("b_detail_st_writer","74","94","74","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("작성자");
            this.addChild(obj.name, obj);

            obj = new Static("b_detail_st_content","73","140","74","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("내용");
            this.addChild(obj.name, obj);

            obj = new TextArea("b_detail_ed_content","144","140","314","208",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("b_detail_btn_delete","320","370","138","58",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("b_detail_btn_update","144","370","138","58",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","144","96","316","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("get_b_writer_st","144","12","316","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("b_detail_st_regDate","74","10","74","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("작성일자");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","b_detail_ed_title","value","ds_board","BOARD_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","b_detail_ed_content","value","ds_board","BOARD_CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Static00","text","ds_board","BOARD_WRITER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","get_b_writer_st","text","ds_board","REG_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_BoardDetail.xfdl", function() {

        this.Form_BoardDetail_onload = function(obj,e)
        {
        	//부모(Form_Board.xfdl) 한테 받은 파라미터를 변수에 저장함.
        	var boardIdx = this.parent.boardIdx;

        	this.ds_search.setColumn(0, "BOARD_CODE", boardIdx);

        	// 1. 필드 변수 선언
        	var strSvcId    = "getBoard";      // 서비스 ID
        	var strSvcUrl   = "svc::getBoard.do";      // 호출 URL
        	var inData      = "ds_search=ds_search";      // 입력 Dataset (ex: "ds_input=ds_input")
        	var outData     = "ds_board=ds_board";      // 출력 Dataset (ex: "ds_output=ds_output")
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

        this.fn_callback = function(svcId, errCd, errMsg){
        	if(svcId === "updateBoard"){
        		if(errCd === -1){
        			this.alert(errMsg)
        		} else {
        			var message = this.ds_response.getColumn(0, "message");
        			var resultValue = this.ds_response.getColumn(0, "result_value");

        			alert(message);

        			if(resultValue === 1){
        				this.close();
        			}

        			this.ds_response.clearData();
        		}
        	}
        }

        this.b_detail_btn_update_onclick = function(obj,e)
        {
        	// 1. 필드 변수 선언
        	var strSvcId    = "updateBoard";      // 서비스 ID
        	var strSvcUrl   = "svc::updateBoard.do";      // 호출 URL
        	var inData      = "ds_board=ds_board";      // 입력 Dataset (ex: "ds_input=ds_input")
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_BoardDetail_onload,this);
            this.b_detail_ed_title.addEventHandler("onchanged",this.b_detail_ed_title_onchanged,this);
            this.b_detail_btn_update.addEventHandler("onclick",this.b_detail_btn_update_onclick,this);
            this.get_b_writer_st.addEventHandler("onclick",this.Static_onclick,this);
            this.b_detail_st_regDate.addEventHandler("onclick",this.Static_onclick,this);
        };
        this.loadIncludeScript("Form_BoardDetail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
