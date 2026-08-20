import json
import os
import glob
import re

def extract_source_maps(search_dir):
    sourcemaps = glob.glob(f"{search_dir}/**/*.js.map", recursive=True)
    
    for sm_path in sourcemaps:
        try:
            with open(sm_path, 'r', encoding='utf-8') as f:
                content = f.read()
                
                # In Next.js App Router, sourcemaps can be in a format where each line is a separate mapping block
                # They are often prefixed or just concatenated JSONs, or a standard sourcemap.
                # Let's try to extract any JSON object that looks like a source map.
                
                # First let's just try to find standard "sources" and "sourcesContent" via regex just to be sure
                # but parsing JSON is safer. We can split by line and try parsing each line.
                
                for line in content.splitlines():
                    if "sourcesContent" not in line:
                        continue
                    try:
                        start = line.index("{")
                        data = json.loads(line[start:])
                        sm = data
                        if "map" in data and "sources" in data["map"]:
                            sm = data["map"]
                        
                        if "sources" in sm and "sourcesContent" in sm:
                            for source, source_content in zip(sm["sources"], sm["sourcesContent"]):
                                if source.startswith("file:///Users/abby/.gemini/antigravity/scratch/adelos-web/src/"):
                                    rel_path = source.replace("file:///Users/abby/.gemini/antigravity/scratch/adelos-web/", "")
                                    if source_content:
                                        os.makedirs(os.path.dirname(rel_path), exist_ok=True)
                                        with open(rel_path, 'w', encoding='utf-8') as out_f:
                                            out_f.write(source_content)
                                        print(f"Restored {rel_path}")
                    except Exception as e:
                        print(f"JSON Parse error on line: {e}")
                        
        except Exception as e:
            print(f"File error {sm_path}: {e}")

if __name__ == "__main__":
    extract_source_maps(".next")
