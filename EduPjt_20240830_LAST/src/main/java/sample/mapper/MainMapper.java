package sample.mapper;

import java.util.HashMap;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("MainMapper")
public interface MainMapper {

	HashMap<String, Object> selectUser(Map<String, Object> dsUser);

	HashMap<String, Object> idChk(Map<String, Object> param);

	int joinUser(Map<String, Object> param);
	
}
