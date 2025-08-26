package sample.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import sample.service.SampleService;

@Service("sampleService")
public class SampleServiceImpl extends EgovAbstractServiceImpl implements SampleService {
	private Logger logger = LoggerFactory.getLogger(SampleServiceImpl.class);

    @Resource(name = "sampleMapper")
    private SampleMapper mapper;

	@Override
	public Map<String, Object> welcome(Map<String,Object> param) {
		// TODO Auto-generated method stub
		return mapper.welcome(param);
	}
}