(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_createBoard");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("new_board", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_CONTENT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_response", this);
            obj._setContents("<ColumnInfo><Column id=\"message\" type=\"STRING\" size=\"256\"/><Column id=\"result_value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_body","186","42","414","458",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","34","40","78","34",null,null,null,null,null,null,this.div_body.form);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_textAlign("center");
            this.div_body.addChild(obj.name, obj);

            obj = new Edit("Edit00","134","38","200","38",null,null,null,null,null,null,this.div_body.form);
            obj.set_taborder("1");
            this.div_body.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","134","96","200","38",null,null,null,null,null,null,this.div_body.form);
            obj.set_taborder("2");
            this.div_body.addChild(obj.name, obj);

            obj = new Static("Static00_00","34","98","78","34",null,null,null,null,null,null,this.div_body.form);
            obj.set_taborder("3");
            obj.set_text("작성자");
            obj.set_textAlign("center");
            this.div_body.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","34","160","78","34",null,null,null,null,null,null,this.div_body.form);
            obj.set_taborder("4");
            obj.set_text("내용");
            obj.set_textAlign("center");
            this.div_body.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","136","170","197","192",null,null,null,null,null,null,this.div_body.form);
            obj.set_taborder("5");
            this.div_body.addChild(obj.name, obj);

            obj = new Button("btn_board_create","136","383","75","34",null,null,null,null,null,null,this.div_body.form);
            obj.set_taborder("6");
            obj.set_text("등록");
            this.div_body.addChild(obj.name, obj);

            obj = new Button("btn_create_cancel","258","383","75","34",null,null,null,null,null,null,this.div_body.form);
            obj.set_taborder("7");
            obj.set_text("취소");
            this.div_body.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_body.form.Edit00","value","new_board","BOARD_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_body.form.Edit00_00","value","new_board","BOARD_WRITER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_body.form.TextArea00","value","new_board","BOARD_CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_createBoard.xfdl", function() {
        this.Form_createBoard_onload = function(obj,e)
        {
        	trace("글쓰기 페이지 로드!");
        };

        this.div_body_btn_create_cancel_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("board::Form_Board.xfdl");
        };


        this.fn_callback = function(svcId, errCD, errMSG){
        	if(svcId === "createBoard"){
        		var message = this.ds_response.getColumn(0, "message");
        		var resultValue = this.ds_response.getColumn(0, "result_value");

        		if(resultValue === 1){
        			this.alert(message);
        			this.close();
        		} else {
        			this.alert(message);
        		}
        	}
        }


        this.div_body_btn_board_create_onclick = function(obj,e)
        {
        	// 1. 필드 변수 선언
        	var strSvcId    = "createBoard";      // 서비스 ID
        	var strSvcUrl   = "svc::createBoard.do";      // 호출 URL
        	var inData      = "new_board=new_board";      // 입력 Dataset (ex: "ds_input=ds_input")
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
            this.addEventHandler("onload",this.Form_createBoard_onload,this);
            this.div_body.form.Static00_00.addEventHandler("onclick",this.div_body_Static00_00_onclick,this);
            this.div_body.form.btn_board_create.addEventHandler("onclick",this.div_body_btn_board_create_onclick,this);
            this.div_body.form.btn_create_cancel.addEventHandler("onclick",this.div_body_btn_create_cancel_onclick,this);
        };
        this.loadIncludeScript("Form_createBoard.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
