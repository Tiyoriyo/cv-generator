const getTempDataSkeleton = () => ({
  general: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  },
  education: {
    school: '',
    subject: '',
    grade: '',
    eduFrom: '',
    eduTo: '',
    eduLocation: '',
  },
  work: {
    company: '',
    title: '',
    details: '',
    workFrom: '',
    workTo: '',
    workLocation: '',
  },
});

export default getTempDataSkeleton;
