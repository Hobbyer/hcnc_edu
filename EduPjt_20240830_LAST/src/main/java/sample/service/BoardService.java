package sample.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface BoardService {
	
	List<HashMap<String, Object>> readBoardList();

	List<HashMap<String, Object>> searchBoardList(Map<String, Object> param);

	HashMap<String, Object> getBoard(Map<String, Object> param);
	
	int createBoard(Map<String, Object> param);

	int updateBoard(Map<String, Object> param);

	int deleteBoard(Map<String, Object> map);
	
}
