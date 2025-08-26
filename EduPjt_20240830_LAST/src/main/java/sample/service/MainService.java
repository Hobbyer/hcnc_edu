package sample.service;

import java.util.HashMap;
import java.util.Map;

public interface MainService {

	HashMap<String, Object> selectUser(Map<String, Object> dsUser);

	HashMap<String, Object> joinUser(HashMap<String, Object> param);

}
