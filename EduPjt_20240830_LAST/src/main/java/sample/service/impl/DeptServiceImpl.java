package sample.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sample.mapper.DeptMapper;
import sample.service.DeptService;

@Service
public class DeptServiceImpl implements DeptService {
	
	@Autowired
	private DeptMapper deptMapper;

	@Override
	public List<HashMap<String, Object>> readDept(){
		
		return deptMapper.readDept();
	}

	@Override
	public List<HashMap<String, Object>> readSubDept(){
		
		return deptMapper.readSubDept();
	}

	@Override
	public List<HashMap<String, Object>> readUsers() {
		// TODO Auto-generated method stub
		return deptMapper.readUsers();
	}

}
