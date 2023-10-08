const inputSkeleton = {
  general: {
    names: {
      title1: 'First Name',
      title2: 'Last Name',
      name1: 'firstName',
      name2: 'lastName',
      id: 0,
    },
    email: {
      title: 'Email',
      name: 'email',
      id: 1,
    },
    phone: {
      title: 'Phone',
      name: 'phone',
      id: 2,
    },
  },
  education: {
    school: {
      title: 'School / University',
      name: 'school',
      id: 0,
    },
    subject: {
      title: 'Subject',
      name: 'subject',
      id: 1,
    },
    grade: {
      title: 'Grade',
      name: 'grade',
      id: 2,
    },
    length: {
      title1: 'From',
      title2: 'To',
      name1: 'eduFrom',
      name2: 'eduTo',
      id: 3,
    },
    location: {
      title: 'Location',
      name: 'eduLocation',
      id: 4,
    },
  },
  work: {
    company: {
      title: 'Company',
      name: 'company',
      id: 0,
    },
    title: {
      title: 'Title',
      name: 'title',
      id: 1,
    },
    location: {
      title: 'Location',
      name: 'workLocation',
      id: 2,
    },
    length: {
      title1: 'From',
      name1: 'workFrom',
      title2: 'To',
      name2: 'workTo',
      id: 3,
    },
    details: {
      title: 'Details',
      name: 'workDetails',
      type: 'textarea',
      id: 4,
    },
  },
};

export default inputSkeleton;
