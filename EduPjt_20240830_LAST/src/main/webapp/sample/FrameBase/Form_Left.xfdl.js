(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Left");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(150,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_left", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("gridLeftMenu","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_left");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"146\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treestartlevel=\"1\" treelevel=\"bind:MENU_LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",150,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Left.xfdl", function() {

        this.Form_Left_onload = function(obj,e)
        {
        	//this.fn_get_left_menu(sMenuId);
        };

        this.fn_get_left_menu = function(sMenuId)
        {
        	// 전역데이터셋 gds_menu가져오기
        	var objApp = nexacro.getApplication();
        	var objDsMenu = objApp.gds_menu;

        	objDsMenu.filter("MENU_ID.indexOf('" + sMenuId + "') == 0 && MENU_LEVEL > 0");

        	// 필터 처리된 데이터셋을 복사
        	this.ds_left.copyData(objDsMenu, true);

        	// 필터링 없애기
        	objDsMenu.filter("");

        };


        this.gridLeftMenu_oncellclick = function(obj,e)
        {
        	// 전역데이터셋 gdsOpenMenu 가져오기
        	var objApp = nexacro.getApplication();
        	var objDsOpenMenu = objApp.gds_open_menu;

        	// 그리드에 바인딩된 데이터셋으로 가져오기
        	var objDsMenu = obj.getBindDataset();
        	var sMenuId = objDsMenu.getColumn(e.row, "MENU_ID");

        	if(sMenuId.length == 4){
        		var RowTree = this.gridLeftMenu.getTreeRow(e.row);
        		var Status = this.gridLeftMenu.getTreeStatus(RowTree);

        		if(Status == 3){
        			return;
        		}

        		Status = (Status == 0 ? 1 : 0);

        		this.gridLeftMenu.setTreeStatus(RowTree, Status);

        	} else if(sMenuId.length == 6){
        		//업무화면 여는 함수 호출
        		this.fn_open_menu(sMenuId);
        	} else {
        		this.alert("오류가 발생하였습니다.");
        	}
        };

        this.fn_open_menu = function(sMenuId)
        {
        	var objApp = nexacro.getApplication();

        	// 메뉴 데이터셋 가져오기
        	var objDsMenu = this.gridLeftMenu.getBindDataset();

        	// 전역데이터셋 가져오기
        	var objDsOpenMenu = objApp.gds_open_menu;

        	// 오픈할 메뉴 정보 가져오기
        	var nFRow     = objDsMenu.findRow("MENU_ID", sMenuId);
        	var sMenuPath = objDsMenu.getColumn(nFRow, "MENU_PATH");

        	objApp.mainframe.VFrameSet00.HFrameSet00.WorkFrame.set_formurl(sMenuPath);

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Left_onload,this);
            this.gridLeftMenu.addEventHandler("oncellclick",this.gridLeftMenu_oncellclick,this);
        };
        this.loadIncludeScript("Form_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
