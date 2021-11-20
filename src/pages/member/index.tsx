import { useEffect, useState } from 'react';
import { UserInfoState } from '@/@types/user';
import { MsgType } from '@/core/constant';
import { getMemberList } from '@/services/user';
import { Radio } from 'antd-mobile';
import SvgIcon from '@/components/SvgIcon';

import Girl from '@/static/img/girl.png';
import './index.scss';

interface MemberProps {}
interface NodeProps {
  user: UserInfoState;
  checkedId: string;
  handleChange: Function;
}
function Node({ user, checkedId, handleChange }: NodeProps) {
  return (
    <div className="member">
      <img className="img" src={Girl} alt="" />
      <div className="user">
        <div className="username">
          {user.name}{' '}
          {user.userId === '001' && <span className="default">默认</span>}
        </div>
        <div className="phone">
          <SvgIcon iconName="shouji" size={20} />
          {user.phone}
        </div>
      </div>
      <Radio
        className="radio"
        key={user.userId}
        checked={checkedId === user.userId}
        onChange={() => {
          handleChange(user.userId);
        }}
      ></Radio>
    </div>
  );
}

const Member: React.FC<MemberProps> = () => {
  const [memberList, setMemberList] = useState<UserInfoState[]>([]);
  const [checkedMember, setCheckedMember] = useState<string>('001');

  useEffect(() => {
    getMemberList().then((resp) => {
      console.log(resp.status, MsgType.SUCCESS);
      if (resp.status === MsgType.SUCCESS) {
        setMemberList(resp.data);
      }
    });
  }, []);

  // ! 修改
  const handleMemberChecked = (userId: string) => {
    setCheckedMember(userId);
    // 若有后端 可调用接口修改默认选项
  };

  return (
    <div className="member-container">
      <div className="add-member">
        <SvgIcon iconName="jia" size={24} />
        添加家庭成员
      </div>
      {memberList.map((member) => (
        <Node
          key={member.userId}
          user={member}
          checkedId={checkedMember}
          handleChange={handleMemberChecked}
        />
      ))}
    </div>
  );
};

export default Member;
