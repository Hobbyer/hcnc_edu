(function()
{
    return function()
    {
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
			// global dataobject
		
            // global dataset
            obj = new Dataset("gds_userInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"user_id\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">00</Col><Col id=\"MENU_NM\">게시판</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_PATH\">board::Form_Board</Col></Row><Row><Col id=\"MENU_ID\">01</Col><Col id=\"MENU_NM\">관리</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">0100</Col><Col id=\"MENU_NM\">사용자부서관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_PATH\">dept::Form_Dept</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_open_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_YES\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            
            // global variable

            
            obj = null;
        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen");

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","720",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.set_titletext("TopLeftFrame");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);
            obj.set_formurl(nexacro._quickview_formurl);
            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };
		// script Compiler
        this.registerScript("Application_Desktop.xadl", function() {
        this.Application_onload = function(obj,e)
        {
        	//공통 FrameSet/Frame에 직접접근을 위한 변수 선언

          //메인프레인 안에 첫 번째 VFrameSet
          nexacro.VFrameSet00 = this.mainframe.VFrameSet00;

          //VFrameSet00 안에 TopFrame
          nexacro.TopFrame = this.mainframe.VFrameSet00.TopFrame;

          //VFrameSet00 HFrameSet00
          nexacro.HFrameSet00 = this.mainframe.VFrameSet00.HFrameSet00;
          //HFrameSet00 안에 LeftFrame
          nexacro.LeftFrame = this.mainframe.VFrameSet00.HFrameSet00.LeftFrame;

          //VFrameSet00 안에 WorkFrame
          nexacro.WorkFrame = this.mainframe.VFrameSet00.HFrameSet00.WorkFrame;
        };
        });
		this.checkLicense("");
        
        this.loadPreloadList();

    };
}
)();
