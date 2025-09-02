(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Dept");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"dept_cd\" type=\"STRING\" size=\"256\"/><Column id=\"dept_nm\" type=\"STRING\" size=\"256\"/><Column id=\"reg_dt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sub_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"dept_sub_cd\" type=\"STRING\" size=\"256\"/><Column id=\"dept_sub_nm\" type=\"STRING\" size=\"256\"/><Column id=\"dept_cd\" type=\"STRING\" size=\"256\"/><Column id=\"reg_dt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_users", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"dept_cd\" type=\"STRING\" size=\"256\"/><Column id=\"dept_nm\" type=\"STRING\" size=\"256\"/><Column id=\"dept_sub_cd\" type=\"STRING\" size=\"256\"/><Column id=\"dept_sub_nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("cb_dept","56","38","104","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("dept_cd");
            obj.set_datacolumn("dept_nm");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_subDept","198","38","102","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_sub_dept");
            obj.set_codecolumn("dept_sub_cd");
            obj.set_datacolumn("dept_sub_nm");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","56","90","554","210",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_users");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"71\"/><Column size=\"75\"/><Column size=\"123\"/><Column size=\"185\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"아이디\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"이메일\"/><Cell col=\"3\" text=\"주소\"/><Cell col=\"4\" text=\"부서코드\"/><Cell col=\"5\" text=\"부서이름\"/><Cell col=\"6\" text=\"서브부서코드\"/><Cell col=\"7\" text=\"서브부서명\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:MAIL\"/><Cell col=\"3\" text=\"bind:ADDRESS\"/><Cell col=\"4\" text=\"bind:dept_cd\"/><Cell col=\"5\" text=\"bind:dept_nm\"/><Cell col=\"6\" text=\"bind:dept_sub_cd\"/><Cell col=\"7\" text=\"bind:dept_sub_nm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_read","346","40","54","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Dept.xfdl", function() {

        this.Form_Dept_onload = function(obj,e)
        {
        	this.fn_read();
        };

        this.fn_callback = function(svcId, errCd, errMsg)
        {
        	switch(svcId) {
        	case "readDeptAndSubDept" :
        		if(errCd != -1){
        			var insertRow = this.ds_dept.insertRow(0);
        			this.ds_sub_dept.insertRow(0);

        			this.ds_dept.setColumn(insertRow, "dept_cd", "-전체-");
        			this.ds_dept.setColumn(insertRow, "dept_nm", "-전체-");

        			this.ds_sub_dept.setColumn(insertRow, "dept_sub_cd", "-전체-");
        			this.ds_sub_dept.setColumn(insertRow, "dept_sub_nm", "-전체-");

        			this.cb_dept.set_value("-전체-");
        			this.cb_subDept.set_value("-전체-");

        			this.cb_subDept.set_readonly(true);

        		} else {
        			trace(errMsg);
        		}

        		break;

        	default:
        	}
        };

        this.fn_read = function()
        {
        	// 1. 필드 변수 선언
        	var strSvcId    = "readDeptAndSubDept";      // 서비스 ID
        	var strSvcUrl   = "svc::readDeptAndSubDept.do";      // 호출 URL
        	var inData      = "";      // 입력 Dataset (ex: "ds_input=ds_input")
        	var outData     = "ds_dept=ds_dept ds_sub_dept=ds_sub_dept ds_users=ds_users";      // 출력 Dataset (ex: "ds_output=ds_output")
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

        this.cb_dept_onitemchanged = function(obj,e)
        {
        	var targetCode = e.postvalue;

        	if(targetCode === "-전체-"){
        		this.ds_sub_dept.filter("");
        		this.cb_subDept.set_readonly(true);
        		this.cb_subDept.set_value("-전체-");
        	} else {
        		this.ds_sub_dept.filter("dept_cd == '" + targetCode + "'");
        		this.cb_subDept.set_readonly(false);

        		this.ds_sub_dept.insertRow(0);
        		this.ds_sub_dept.setColumn(0, "dept_sub_cd","-전체-");
        		this.ds_sub_dept.setColumn(0, "dept_sub_nm","-전체-");
        		this.cb_subDept.set_index(0);
        	}

        };

        this.btn_read_onclick = function(obj,e)
        {
        	var dept = this.cb_dept.value;
        	var sub_dept = this.cb_subDept.value;

        	trace("부서 : " + dept + "서브부서 : " + sub_dept);

        	if(dept === "-전체-"){
        		this.ds_users.filter("");
        	} else if(sub_dept === "-전체-"){
        		this.ds_users.filter("dept_cd === '" + dept + "'");
        	} else {
        		this.ds_users.filter("dept_cd === '" + dept + "' && dept_sub_cd === '" + sub_dept + "'");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Dept_onload,this);
            this.cb_dept.addEventHandler("onitemchanged",this.cb_dept_onitemchanged,this);
            this.btn_read.addEventHandler("onclick",this.btn_read_onclick,this);
        };
        this.loadIncludeScript("Form_Dept.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
