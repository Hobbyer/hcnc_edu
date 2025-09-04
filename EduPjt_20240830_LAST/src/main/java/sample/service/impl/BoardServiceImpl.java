package sample.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sample.mapper.BoardMapper;
import sample.service.BoardService;

@Service
public class BoardServiceImpl implements BoardService {
	
	@Autowired
	private BoardMapper boardMapper;
	
	
	public List<HashMap<String, Object>> readBoardList(){
		
		return boardMapper.readBoardList();
	}


	@Override
	public List<HashMap<String, Object>> searchBoardList(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return boardMapper.searchBoardList(param);
	}


	@Override
	public HashMap<String, Object> getBoard(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return boardMapper.getBoard(param);
	}


	@Override
	public int createBoard(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return boardMapper.createBoard(param);
	}


	@Override
	public int updateBoard(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return boardMapper.updateBoard(param);
	}


	@Override
	public int deleteBoard(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return boardMapper.deleteBoard(map);
	}
}
