package com.tabboilarplat;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;

/**
 * Created by pankaj at com.tabboilarplat on 22/02/18.
 * it is an splash screen
 */

public class SplashActivity extends AppCompatActivity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                Intent mainIntent = new Intent(SplashActivity.this, MainActivity.class);
                startActivity(mainIntent);
                overridePendingTransition(R.anim.anim_slide_in_left, R.anim.anim_slide_out_left);
                finish();
            }
        }, 2500);
    }
}
