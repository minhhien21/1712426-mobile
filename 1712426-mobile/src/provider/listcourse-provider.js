import React, {useReducer} from 'react';
import {
  requestFavoriteListCourse,
  requestTopNewListCourse,
  requestTopRateListCourse,
  requestTopSellListCourse,
} from '../action/listcourses-action';
import { reducer } from '../reducer/listcourse-reducer';

const ListCourseContext = React.createContext();
const initialState = {
  isRequestedTopSell: false,
  TopSellListCourse: [
    {
      id: '79cca891-5291-480a-bc05-d5fb15ac3263',
      title: 'Lập Trình Với Java',
      subtitle: 'Kiến thức cơ bản và các framework cần thiết về Java',
      price: 10000,
      description: 'Kiến thức cơ bản và các framework cần thiết về Java',
      requirement: ['C/C++'],
      learnWhat: [
        'Java Programming',
        'Java Swing Framework',
        'Object - Oriented Programming',
        'Design Patterns',
      ],
      soldNumber: 0,
      ratedNumber: 0,
      videoNumber: 6,
      totalHours: 0.016,
      formalityPoint: 0,
      contentPoint: 0,
      presentationPoint: 0,
      imageUrl:
        'https://storage.googleapis.com/itedu-bucket/Courses/79cca891-5291-480a-bc05-d5fb15ac3263/avatar/6af1fa45-b4d2-44a2-b5a9-fea4e45e6024.jpg',
      promoVidUrl:
        'https://storage.googleapis.com/itedu-bucket/Courses/79cca891-5291-480a-bc05-d5fb15ac3263/promo/44f4bae2-05ed-4b38-afb8-09893a3a1ca3.mov',
      status: 'COMPLETED',
      isHidden: false,
      isDeleted: false,
      createdAt: '2020-12-07T09:00:05.609Z',
      updatedAt: '2020-12-07T09:07:06.106Z',
      instructorId: 'a0232ee9-0135-4561-90a3-0d0c1d151e51',
      typeUploadVideoLesson: 1,
      'instructor.user.id': '041c955a-e4e4-4570-afb0-87cb05d92749',
      'instructor.user.name': 'Thanh Ho',
    },
  ],
  isRequestedTopNew: false,
  TopNewListCourse: [
    {
      id: '79cca891-5291-480a-bc05-d5fb15ac3263',
      title: 'Lập Trình Với Java',
      subtitle: 'Kiến thức cơ bản và các framework cần thiết về Java',
      price: 10000,
      description: 'Kiến thức cơ bản và các framework cần thiết về Java',
      requirement: ['C/C++'],
      learnWhat: [
        'Java Programming',
        'Java Swing Framework',
        'Object - Oriented Programming',
        'Design Patterns',
      ],
      soldNumber: 0,
      ratedNumber: 0,
      videoNumber: 6,
      totalHours: 0.016,
      formalityPoint: 0,
      contentPoint: 0,
      presentationPoint: 0,
      imageUrl:
        'https://storage.googleapis.com/itedu-bucket/Courses/79cca891-5291-480a-bc05-d5fb15ac3263/avatar/6af1fa45-b4d2-44a2-b5a9-fea4e45e6024.jpg',
      promoVidUrl:
        'https://storage.googleapis.com/itedu-bucket/Courses/79cca891-5291-480a-bc05-d5fb15ac3263/promo/44f4bae2-05ed-4b38-afb8-09893a3a1ca3.mov',
      status: 'COMPLETED',
      isHidden: false,
      isDeleted: false,
      createdAt: '2020-12-07T09:00:05.609Z',
      updatedAt: '2020-12-07T09:07:06.106Z',
      instructorId: 'a0232ee9-0135-4561-90a3-0d0c1d151e51',
      typeUploadVideoLesson: 1,
      'instructor.user.id': '041c955a-e4e4-4570-afb0-87cb05d92749',
      'instructor.user.name': 'Thanh Ho',
    },
  ],
  isRequestedTopRate: false,
  TopRateListCourse: [
    {
      id: '79cca891-5291-480a-bc05-d5fb15ac3263',
      title: 'Lập Trình Với Java',
      subtitle: 'Kiến thức cơ bản và các framework cần thiết về Java',
      price: 10000,
      description: 'Kiến thức cơ bản và các framework cần thiết về Java',
      requirement: ['C/C++'],
      learnWhat: [
        'Java Programming',
        'Java Swing Framework',
        'Object - Oriented Programming',
        'Design Patterns',
      ],
      soldNumber: 0,
      ratedNumber: 0,
      videoNumber: 6,
      totalHours: 0.016,
      formalityPoint: 0,
      contentPoint: 0,
      presentationPoint: 0,
      imageUrl:
        'https://storage.googleapis.com/itedu-bucket/Courses/79cca891-5291-480a-bc05-d5fb15ac3263/avatar/6af1fa45-b4d2-44a2-b5a9-fea4e45e6024.jpg',
      promoVidUrl:
        'https://storage.googleapis.com/itedu-bucket/Courses/79cca891-5291-480a-bc05-d5fb15ac3263/promo/44f4bae2-05ed-4b38-afb8-09893a3a1ca3.mov',
      status: 'COMPLETED',
      isHidden: false,
      isDeleted: false,
      createdAt: '2020-12-07T09:00:05.609Z',
      updatedAt: '2020-12-07T09:07:06.106Z',
      instructorId: 'a0232ee9-0135-4561-90a3-0d0c1d151e51',
      typeUploadVideoLesson: 1,
      'instructor.user.id': '041c955a-e4e4-4570-afb0-87cb05d92749',
      'instructor.user.name': 'Thanh Ho',
    },
  ],
  isRequestedFavorite: false,
  FavoriteListCourse: [
    {
      id: '79cca891-5291-480a-bc05-d5fb15ac3263',
      title: 'Lập Trình Với Java',
      subtitle: 'Kiến thức cơ bản và các framework cần thiết về Java',
      price: 10000,
      description: 'Kiến thức cơ bản và các framework cần thiết về Java',
      requirement: ['C/C++'],
      learnWhat: [
        'Java Programming',
        'Java Swing Framework',
        'Object - Oriented Programming',
        'Design Patterns',
      ],
      soldNumber: 0,
      ratedNumber: 0,
      videoNumber: 6,
      totalHours: 0.016,
      formalityPoint: 0,
      contentPoint: 0,
      presentationPoint: 0,
      imageUrl:
        'https://storage.googleapis.com/itedu-bucket/Courses/79cca891-5291-480a-bc05-d5fb15ac3263/avatar/6af1fa45-b4d2-44a2-b5a9-fea4e45e6024.jpg',
      promoVidUrl:
        'https://storage.googleapis.com/itedu-bucket/Courses/79cca891-5291-480a-bc05-d5fb15ac3263/promo/44f4bae2-05ed-4b38-afb8-09893a3a1ca3.mov',
      status: 'COMPLETED',
      isHidden: false,
      isDeleted: false,
      createdAt: '2020-12-07T09:00:05.609Z',
      updatedAt: '2020-12-07T09:07:06.106Z',
      instructorId: 'a0232ee9-0135-4561-90a3-0d0c1d151e51',
      typeUploadVideoLesson: 1,
      'instructor.user.id': '041c955a-e4e4-4570-afb0-87cb05d92749',
      'instructor.user.name': 'Thanh Ho',
    },
  ],
};

const ListCourseProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ListCourseContext.Provider
      value={{
        state,
        requestTopSellListCourse: requestTopSellListCourse(dispatch),
        requestTopNewListCourse: requestTopNewListCourse(dispatch),
        requestTopRateListCourse: requestTopRateListCourse(dispatch),
        requestFavoriteListCourse: requestFavoriteListCourse(dispatch),
      }}>
      {children}
    </ListCourseContext.Provider>
  );
};

export {ListCourseProvider, ListCourseContext};
