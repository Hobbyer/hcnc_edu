package sample.service.impl;

import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sample.mapper.MainMapper;
import sample.service.MainService;
import sample.util.ShaUtil;

@Service
public class MainServiceImpl implements MainService {
	
	@Autowired
	private MainMapper mainMapper;

	@Override
	public HashMap<String, Object> selectUser(Map<String, Object> dsUser){
		
		String userId = (String) dsUser.get("user_id");
		String userPw = (String) dsUser.get("user_pw");
		
		try {
			HashMap<String, Object> getUser = mainMapper.selectUser(dsUser);
			
			String getUserId = (String) getUser.get("USER_ID");
			String getPass = (String) getUser.get("PASS");
			String getSalt = (String) getUser.get("SALT");
			
			String loginPass = ShaUtil.sha256Encode(userPw, getSalt);
			HashMap<String, Object> resultMap = new HashMap<String, Object>();
			if(loginPass.equals(getPass)) {
				
				resultMap.put("userId", getUserId);
				resultMap.put("userPw", "O");
				
				return resultMap;
			} else {
				
				resultMap.put("userId", null);
				resultMap.put("userPw", "X");
				
				return resultMap;
			}
			
		} catch(Exception e) {
			System.out.println("쿼리 실행 중 오류발생");
			return null;
		}
	}
	

	public HashMap<String, Object> idChk(Map<String, Object> param) {
		// TODO Auto-generated method stub
		
		return mainMapper.idChk(param);
		
	}


	@Override
	public int joinUser(Map<String, Object> param) throws NoSuchAlgorithmException {
		// TODO Auto-generated method stub
		
		String inputPw = (String) param.get("user_pw");
		String salt = ShaUtil.getSalt();
		
		String user_pw = ShaUtil.sha256Encode(inputPw, salt);
		
		param.put("user_salt", salt);
		param.replace("user_pw", user_pw);
		
		
		return mainMapper.joinUser(param);
	}
}
