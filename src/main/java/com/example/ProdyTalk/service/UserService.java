package com.example.ProdyTalk.service;

import com.example.ProdyTalk.vo.UserVO;

public interface UserService {
    public void insertUser(UserVO user);
    public UserVO findUser(UserVO user);
}