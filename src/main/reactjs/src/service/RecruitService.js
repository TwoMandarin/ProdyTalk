import axios from 'axios';

class RecruitService {

    // 글 목록 데이터 가져옴
    getRecruits() {
        return axios.get("/recruit");
    }

    // 글 작성
    createRecruit(recruit) {
        return axios.post("/recruit", recruit);
    }

    // 글 상세보기
    getOneRecruit(recruit_id) {
        return axios.get("/recruit/" + recruit_id)
    }

    // 글 수정
    updateRecruit(recruit_id, room_type, title, content, user_id) {
        return axios.post("/recruit/update", {
            room_type: room_type,
            recruit_id: recruit_id,
            title: title,
            content: content,
            user_id: user_id,
        })
    }

    // 글 삭제
    deleteRecruit(recruit_id) {
        return axios.post("/recruit/delete", {
            recruit_id: recruit_id
        })
    }
}
export default new RecruitService();