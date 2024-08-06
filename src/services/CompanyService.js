const getCompanies = async () => {
    const response = await fetch('/server/api/recruit/companies');
    const data = await response.json();
    return data;
};

const CompanyService = {
    getCompanies
};

export default CompanyService;