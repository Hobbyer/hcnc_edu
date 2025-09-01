package sample.web;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import sample.service.DeptService;

@Controller
public class DeptController {

	@Autowired
	private DeptService deptService;
	
	@RequestMapping(value="/readDeptAndSubDept.do")
	public NexacroResult readDeptAndSubDept() {
		
		NexacroResult result = new NexacroResult();
		
		try {
			List<HashMap<String, Object>> deptResult = deptService.readDept();
			
			List<HashMap<String, Object>> subDeptResult = deptService.readSubDept();
			
			List<HashMap<String, Object>> usersResult = deptService.readUsers();
			
			result.addDataSet("ds_dept", deptResult);
			result.addDataSet("ds_sub_dept", subDeptResult);
			result.addDataSet("ds_users", usersResult);
			
		} catch(Exception e) {
			result.setErrorCode(-1);
			result.setErrorMsg("서비스 처리중 오류발생!");
		}
		
		return result;
	}
}