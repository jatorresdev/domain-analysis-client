export default {
  async getReport() {
    const res = await fetch('http://localhost:8888/api/v1/analyzed-domains');
    const data = await res.json();

    return data;
  },
}