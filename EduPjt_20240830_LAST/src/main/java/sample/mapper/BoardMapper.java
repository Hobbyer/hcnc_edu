package sample.mapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("BoardMapper")
public interface BoardMapper {

	List<HashMap<String, Object>> readBoardList();

	List<HashMap<String, Object>> searchBoardList(Map<String, Object> param);

	HashMap<String, Object> getBoard(Map<String, Object> param);
	
}
