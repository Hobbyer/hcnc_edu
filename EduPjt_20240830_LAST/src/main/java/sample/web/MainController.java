package sample.web;

import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import sample.service.MainService;

@Controller
public class MainController {
	
	@Autowired
	private MainService mainService;
	
	@RequestMapping(value="/selectUser.do")
	public NexacroResult selectUser(@ParamDataSet(name="ds_user", required = false) Map<String, Object> dsUser, HttpServletRequest request) {
		
		System.out.println(dsUser);
		
		NexacroResult result = new NexacroResult();
		
		try {
			HashMap<String, Object> userCheck = mainService.selectUser(dsUser);
			
			if (userCheck.get("userPw").equals("O")) {
				System.out.println("로그인성공");
				
				HttpSession session = request.getSession();
				
				session.setAttribute("login", userCheck);
								
				result.addDataSet("ds_login", userCheck);
				
			} else {
				System.out.println("로그인에 실패하였습니다.");
				
				result.addDataSet("ds_login", userCheck);
			}
		} catch(Exception e) {
			System.out.println("오류발생!");
			result.setErrorCode(-1);
			result.setErrorMsg("catch 오류>>>>");
		}
		
		System.out.println(result);
		
		return result;
	}
	
	@RequestMapping(value="/idChk.do")
	public NexacroResult idChk(@ParamDataSet(name="idChk", required = false) Map<String, Object> param) {
		
		System.out.println(param);
		
		NexacroResult result = new NexacroResult();
		
		HashMap<String, Object> resultData = new HashMap<String, Object>();
		
		try {
			HashMap<String, Object> userCheck = mainService.idChk(param);
			
			if(userCheck != null) {
				System.out.println("중복된 회원이 존재 합니다.");
				
				resultData.put("message", "중복된 회원이 존재합니다.");
				resultData.put("result_value", 0);
				
				result.addDataSet("idChk_result", resultData);
			} else {
				System.out.println("사용가능한 아이디입니다.");
				
				resultData.put("message", "사용가능한 아이디입니다.");
				resultData.put("result_value", 1);
				
				result.addDataSet("idChk_result", resultData);
			}
		} catch(Exception e) {
			System.out.println("오류발생!");
			result.setErrorCode(-1);
			result.setErrorMsg("catch 오류>>>>");
		}
		return result;
	}
	
	@RequestMapping(value="/joinUser.do")
	public NexacroResult joinUser(@ParamDataSet(name="join_user", required = false) Map<String, Object> param) throws NoSuchAlgorithmException {
		
		NexacroResult result = new NexacroResult();
		
		System.out.println(param);
		
		HashMap<String, Object> resultData = new HashMap<String, Object>();
		
		try {
			int insertResult = mainService.joinUser(param);
			
			if(insertResult == 1) {
				System.out.println("회원가입이 완료되었습니다.");
				
				resultData.put("message", "회원가입이 완료되었습니다.");
				resultData.put("result_value", 1);
				
				result.addDataSet("join_result", resultData);
			} else {
				System.out.println("회원가입 진행중 오류가 발생했습니다.");
				
				resultData.put("message", "회원가입 중 오류가 발생했습니다. 다시 시도해주세요!");
				resultData.put("result_value", 0);
				
				result.addDataSet("join_result", resultData);
			}
		} catch(Exception e) {
			System.out.println("오류발생!");
			result.setErrorCode(-1);
			result.setErrorMsg("catch 오류>>>>");
		}
		
		return result;
		
	}
	 
}
