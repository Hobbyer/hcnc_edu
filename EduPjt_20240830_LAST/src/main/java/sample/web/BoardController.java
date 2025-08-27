package sample.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import sample.service.BoardService;

@Controller
public class BoardController {
	
	@Autowired
	private BoardService boardService;

	
	@RequestMapping(value="/readBoardList.do")
	public NexacroResult readBoardList() {
		
		NexacroResult result = new NexacroResult();
		
		
		List<HashMap<String, Object>> resultData = boardService.readBoardList();
		
		if(resultData != null) {
			result.addDataSet("ds_list", resultData);
		}
		
		return result;
	}
	
	@RequestMapping(value="/searchBoardList.do")
	public NexacroResult searchBoardList(@ParamDataSet(name="ds_search", required = false) Map<String, Object> param) {
		
		NexacroResult result = new NexacroResult();
		
		System.out.println(param);
		
		List<HashMap<String, Object>> resultData = boardService.searchBoardList(param);
		
		result.addDataSet("ds_list", resultData);
		
		return result;
		
	}
	
	@RequestMapping(value="/getBoard.do")
	public NexacroResult getBoard(@ParamDataSet(name="ds_search", required = false) Map<String, Object> param) {
		
		NexacroResult result = new NexacroResult();
		
		System.out.println(param);
		
		HashMap<String, Object> resultData = boardService.getBoard(param);
		
		result.addDataSet("ds_board", resultData);
		
		return result;
		
	}
}
