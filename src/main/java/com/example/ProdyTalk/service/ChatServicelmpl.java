package com.example.ProdyTalk.service;

import com.example.ProdyTalk.chat.vo.MessageVO;
import com.example.ProdyTalk.mapper.ChatMapper;


import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ChatServicelmpl implements ChatService {
    private final ChatMapper chatMapper;

    @Override
    public void insertMessage(MessageVO messageVO) {
        chatMapper.insertMessage(messageVO);
    }

    @Override
    public int searchLast() {
        return chatMapper.searchLast();
    }

    @Override
    public List<MessageVO> getChatList(int conversation_id) {
        return chatMapper.getChatList(conversation_id);
    }
}