

  export const addScript = () => {
    const MAP_KEY = process.env.GOOGLE_MAP_KEY;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDbWXT-YxZ4GmJBVsDS17q8wYKMjbK2KFM&libraries=places`;
    document.getElementsByTagName('body')[0].append(script)
  }


 // <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDbWXT-YxZ4GmJBVsDS17q8wYKMjbK2KFM&libraries=places"></script>
