(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1030,90);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_top", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","310","20","222","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("탑 메뉴 입니다.");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1030,90,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Top.xfdl", function() {

        this.Form_Top_onload = function(obj,e)
        {
        	this.fn_get_top_menu();
        	this.fn_create_top_menu();
        };

        this.fn_get_top_menu = function()
        {
        	// 전역데이터셋에 있는 gdsMenu를 가져온다.
        	var objApp = nexacro.getApplication();
        	var objDsMenu = objApp.gds_menu;

        	// 메뉴렝벨이 0인 값으로 데이터셋 필터
        	objDsMenu.filter("MENU_LEVEL == 0");

        	// 필터처리된 데이터셋을 복사한다.
        	// copyData 메서드 매개변수에 "true" 설정하여
        	// 필터링된 데이터만 복사
        	this.ds_top.copyData(objDsMenu, true);

        	objDsMenu.filter("");
        };

        this.fn_create_top_menu = function()
        {
        	// 메뉴id, 메뉴명
        	var sMenuId;
        	var sMenuNm;

        	// 메뉴 버튼들 위치설정을 위한 기본 값
        	var nLeft = 200;
        	var nTop = 13;
        	var nWidth = 230;
        	var nHeight = 50;

        	// 버튼사이에 간격 선언
        	var nGap = 0;

        	var sBtnCssClass = "btn_top_menu";

        	var nRowCnt = this.ds_top.rowcount;

        	// 복사한 데이터세스이 row 갯수만큼 돌림
        	for(var i=0; i < nRowCnt; i++){
        		// 데이터셋에서 MENU_ID, MENU_NM값 가져와서 선언한 변수에 각각 넣어주기.
        		sMenuId = this.ds_top.getColumn(i, "MENU_ID");
        		sMenuNm = this.ds_top.getColumn(i, "MENU_NM");

        		// 새로운 버튼 생성
        		var objButton = new Button();
        		objButton.init("btn_" + sMenuId, nLeft, nTop, nWidth, nHeight, null, null);

        		// 버튼 컴포넌트 설정
        		objButton.set_text(sMenuNm);

        		objButton.set_cssclass(sBtnCssClass);

        		// 생성한 버튼 컴포넌트를 form의 자식 컴포넌트로 추가
        		this.addChild(objButton.id, objButton);

        		// 버튼의 특정 이벤트에 onclick 핸들러 함수를 추가
        		objButton.addEventHandler("onclick", this.btnTopMenu_onclick, this);

        		objButton.show();

        		// 두번째 버튼부터는 이전 버튼과 nGap 만큼의 간격으로 생성되도록
                nLeft = objButton.id + ":" + nGap + "px";
        	}

        	this.resetScroll();
        };


        this.btnTopMenu_onclick = function(obj, e)
        {
        	var objApp = nexacro.getApplication();

        	var LeftFrame = objApp.mainframe.VFrameSet00.HFrameSet00.LeftFrame.form;

        	LeftFrame.gridLeftMenu.set_visible(true);

        	// 버튼 id에서 메뉴 id값을 추출
        	var arrResultId = obj.id.split('-');
        	var sResultId = arrResultId[1];

        	// 왼쪽 메뉴 가져오는 함수 호출 - framleft 화면
        	nexacro.LeftFrame.form.fnGetLeftMenu(sResultId);

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Top_onload,this);
        };
        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
