package sample.mapper;

import java.util.HashMap;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("MainMapper")
public interface MainMapper {

	HashMap<String, Object> selectUser(Map<String, Object> dsUser);

	HashMap<String, Object> joinUser(HashMap<String, Object> param);
	
}
