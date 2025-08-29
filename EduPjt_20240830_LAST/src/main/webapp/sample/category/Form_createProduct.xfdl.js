(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_createProduct");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","366","23","554","674",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_background("lightskyblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","62","69","70","43",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("카테고리명");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","62","166","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("상품명");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","62","250","70","68",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("재고");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","62","372","70","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("설명");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","164","166","300","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","164","357","300","202",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00","164","82","300","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_background("lightgray");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","164","257","300","43",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","174","594","100","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("등록");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","328","594","100","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("취소");
            this.Div00.addChild(obj.name, obj);
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Static00.addEventHandler("onclick",this.Div00_Static00_onclick,this);
        };
        this.loadIncludeScript("Form_createProduct.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
