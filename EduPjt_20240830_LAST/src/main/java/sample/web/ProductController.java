package sample.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import sample.service.ProductService;

@Controller
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@RequestMapping(value="/readCategoryAndProduct.do")
	public NexacroResult readCategoryAndProduct() {
		
		NexacroResult result = new NexacroResult();
		
		List<HashMap<String, Object>> readCategoryResult = productService.readCategory();
		
		List<HashMap<String, Object>> readProductResult = productService.readProduct();
		
		
		result.addDataSet("ds_category", readCategoryResult);
		result.addDataSet("ds_product", readProductResult);
		
		return result;
	}
	
	@RequestMapping(value="/getProduct.do")
	public NexacroResult getProduct(@ParamDataSet(name="ds_search", required = false) Map<String, Object> param) {
		
		NexacroResult result = new NexacroResult();
		
		System.out.println(param);
		
		HashMap<String, Object> getResult = productService.getProduct(param);
		
		result.addDataSet("ds_product", getResult);
		
		return result;
	}
	
	@RequestMapping(value="/saveProduct.do")
	public NexacroResult saveProduct(@ParamDataSet(name="ds_product", required = false) Map<String, Object> param) {
		
		NexacroResult result = new NexacroResult();
		
		System.out.println(param);
		
		int saveResult = productService.saveProduct(param);
		
		HashMap<String, Object> resultData = new HashMap<String, Object>();
		
		if(saveResult == 1) {
			
			resultData.put("message", "저장 완료!");
			
		} else {
			resultData.put("message", "저장 실패!");
		}
		
		resultData.put("result_value", resultData);
		
		result.addDataSet("ds_response", resultData);
		
		return result;
	}
	
}
