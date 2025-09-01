package sample.service;

import java.util.HashMap;
import java.util.List;

public interface DeptService {

	List<HashMap<String, Object>> readDept();

	List<HashMap<String, Object>> readSubDept();

	List<HashMap<String, Object>> readUsers();

}
