package sample.mapper;

import java.util.HashMap;
import java.util.List;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("DeptMapper")
public interface DeptMapper {

	List<HashMap<String, Object>> readDept();

	List<HashMap<String, Object>> readSubDept();

	List<HashMap<String, Object>> readUsers();

}
