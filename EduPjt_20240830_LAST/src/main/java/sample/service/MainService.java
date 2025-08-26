package sample.service;

import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.Map;

public interface MainService {

	HashMap<String, Object> selectUser(Map<String, Object> dsUser);

	HashMap<String, Object> idChk(Map<String, Object> param);

	int joinUser(Map<String, Object> param) throws NoSuchAlgorithmException;

}
