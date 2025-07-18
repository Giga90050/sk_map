var simplemaps_countrymap_mapdata={
  main_settings: {
    //General settings
		width: "responsive", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    pop_ups: "detect",
    
		//State defaults
		
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
		//Location defaults
		location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
		//Label defaults
		label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "no",
    label_scale: "no",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
		//Zoom settings
		zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
		//Popup settings
		popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
		//Advanced settings
		div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {
    SKBC: {
      name: "Banskobystrický",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    SKBL: {
      name: "Bratislavský",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    SKKI: {
      name: "Košický",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    SKNI: {
      name: "Nitriansky",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    SKPV: {
      name: "Prešov",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    SKTA: {
      name: "Trnavský",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    SKTC: {
      name: "Trenciansky",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    SKZI: {
      name: "Žilinský",
      description: "no",
      color: "default",
      hover_color: "default",
      url: "default"
    }
  },
  locations: {
    "0": {
      name: "Bratislava",
      lat: "48.15",
      lng: "17.116667"
    }
  },
  labels: {
    SKBC: {
      name: "Banskobystrický",
      parent_id: "SKBC"
    },
    SKBL: {
      name: "Bratislavský",
      parent_id: "SKBL"
    },
    SKKI: {
      name: "Košický",
      parent_id: "SKKI"
    },
    SKNI: {
      name: "Nitriansky",
      parent_id: "SKNI"
    },
    SKPV: {
      name: "Prešov",
      parent_id: "SKPV"
    },
    SKTA: {
      name: "Trnavský",
      parent_id: "SKTA"
    },
    SKTC: {
      name: "Trenciansky",
      parent_id: "SKTC"
    },
    SKZI: {
      name: "Žilinský",
      parent_id: "SKZI"
    }
  }
};