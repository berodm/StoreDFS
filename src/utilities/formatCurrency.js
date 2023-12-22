const formatCurrency = (value) => {
  return value.toLocaleString('es-es', {
    style: 'currency', currency: 'EUR' }); 
};

export default formatCurrency;
