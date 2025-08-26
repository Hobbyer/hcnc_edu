package sample.service.impl;

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
}
