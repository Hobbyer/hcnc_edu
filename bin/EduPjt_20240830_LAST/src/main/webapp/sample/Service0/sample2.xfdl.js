(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample2");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Combo("Combo00","65","50","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">ID</Col><Col id=\"datacolumn\">id</Col></Row><Row><Col id=\"codecolumn\">NAME</Col><Col id=\"datacolumn\">name</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","230","50","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","615","50","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회2");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","25","105","763","379",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"106\"/><Column size=\"133\"/><Column size=\"201\"/><Column size=\"126\"/><Column size=\"97\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DESCRIPTION\"/><Cell col=\"3\" text=\"USE_YN\"/><Cell col=\"4\" text=\"REG_USER\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" text=\"bind:USE_YN\"/><Cell col=\"4\" text=\"bind:REG_USER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sample2.xfdl", function() {
        //조회버튼 클릭시
        this.Button00_onclick = function(obj,e)
        {
          this.fnSearch();
        };

        //처리콜백 함수
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
          // 에러 시 화면 처리 내역
          if(errorCode != 0)
          {
            this.alert(errorCode+"\n"+errorMsg);
            return;
          }

          switch(svcID)
          {
            case "search":
              if(this.ds_list.rowcount < 1){
                this.alert("조회된 결과가 없습니다.");
              }

              break;
          }
        };

        //데이터 조회 트랜잭션
        this.fnSearch = function ()
        {
        alert("sss");
          // 조회조건 셋팅
          this.ds_search.setColumn(0, "searchType", this.Combo00.value);
          this.ds_search.setColumn(0, "keyword"  , this.Edit00.text);

          var strSvcId    = "search";
          var strSvcUrl   = "svc::selectSampleList.do";
          var inData      = "input1=ds_search";
          var outData     = "ds_list=output1";
          var strArg      = "";
          var callBackFnc = "fnCallback";
          var isAsync     = true;

          this.transaction(strSvcId ,     // transaction을 구분하기 위한 svc id값
                    strSvcUrl ,   // trabsaction을 요청할 주소
                    inData ,     // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                    outData ,     // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                    strArg,     // 입력값으로 보낼 arguments, a=b
                    callBackFnc,   // transaction의 결과를 받을 Function 이름
                    isAsync);     // 비동기통신 여부 [생략가능]
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("sample2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
