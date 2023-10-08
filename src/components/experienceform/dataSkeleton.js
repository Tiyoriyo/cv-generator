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
    workDetails: '',
    workFrom: '',
    workTo: '',
    workLocation: '',
  },
});

export default getTempDataSkeleton;
