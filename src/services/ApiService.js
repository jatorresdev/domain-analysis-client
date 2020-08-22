export default {
  async getReport() {
    const res = await fetch('http://localhost:8888/api/v1/analyzed-domains');
    return await res.json();
  },
  async getDomainInfo(domain) {
    const res = await fetch(`http://localhost:8888/api/v1/analyze/${domain}`);
    return await res.json();
  },
}